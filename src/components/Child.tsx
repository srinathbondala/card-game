import React from "react";
import { useEffect } from 'react';
import Card from "./Card";
import { Container, Paper, Typography } from "@mui/material";

interface data  {
    updateName: (score: number)=> void
    updateCardsCnt: (count : number) => void
    highest?: number
}
export interface cardData{
    value: number;
    on: boolean;
    blocked:boolean;
    handleClick?: (cardIndex : number)=> Promise<void>;
    key?: number;
    cardIndex?: number;
}
const Child: React.FC<data> =  ({updateName,updateCardsCnt,highest})=>{
    const [click, setClick] = React.useState<number>(0);
    const [option1, setOption1] = React.useState<number>(-1);
    const [cards, setCards] = React.useState<cardData[]>([]);
    
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    function shuffleArray(arr : cardData[]) {
        arr.sort(() => Math.random() - 0.5);
    }

    useEffect(()=>{
        let card : cardData[] =[];
        for(let i=0;i<8;i++){

        card.push({value: i+1, on: false,blocked: false});
        card.push({value : i+1, on : false, blocked:false});
        }
        shuffleArray(card);
        setCards(card);
    },[])

    async function flipCard(index:number) {
        if(cards[index].blocked || cards[index].on || click===2){
        return;
        }
        setClick(click+1);
        setCards((prevCards) =>{
        const newCards = [...prevCards] 
        newCards[index] = {value:newCards[index].value,on:!newCards[index].on,blocked:newCards[index].blocked} 
        return newCards
        })
        if(click===0)
        setOption1(index)
        else if(click===1){
        if(cards[option1].value === cards[index].value){
            setCards((prevCards) => {
                const newCards = [...prevCards] 
                newCards[option1] = {value:newCards[option1].value,on:true, blocked: true}
                newCards[index] = {value:newCards[index].value,on:true, blocked: true} 
                return newCards
            })
            updateCardsCnt(-20);
        }
        else{
            updateName(10);
            await delay(300);
            setCards((prevCards) => {
                const newCards = [...prevCards]
                newCards[option1] = {value:newCards[option1].value,on:false, blocked: false}
                newCards[index] = {value:newCards[index].value,on:false, blocked: false} 
                return newCards
            })
        }
        setClick(0)
        setOption1(-1)
        }
        // console.log(click);
    }
    return(
        <div className="main-div">
            <div className="main">
                {
                    cards.map((card,index) =>
                    <Card value={card.value}
                    on={card.on}
                    blocked = {card.blocked}
                    cardIndex={index}
                    handleClick={flipCard}
                    key={index}/>)
                }
            </div>
            <Container sx={{margin:0, width:"400px"}}>
                <Paper sx={{padding:"10px"}}>
                    <Typography variant="h4">Highest Score: {highest}</Typography>
                    <br />
                    <button onClick={()=>window.location.reload()}>Restart</button>
                </Paper>
            </Container>
        </div>
    )
}

export default Child;