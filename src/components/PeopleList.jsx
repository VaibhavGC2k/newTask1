import React, { useEffect, useState } from 'react'
import { auth, database } from '../firebase-config';
import { getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export default function PeopleList() {
    const [curUser, setCurUser] = useState('')
    const [totalUsers, setTotalUsers] = ([])

    onAuthStateChanged(auth, (currentUser) => {
        setCurUser(currentUser);
    });

    const userCollection = collection(database, "userDb");
    getDocs(userCollection).then((data) =>
        data.docs.forEach(async (user) => {
            const User = doc(userCollection, user.id);
            const response = await getDoc(User);
            console.log(response.data)
        })).catch((error) => {
            console.log(error.message)
        })

    return (
        <>
            {curUser ? <p>{curUser.email}</p> : ""}
            {/* {totalUsers.map((eachUser) => (
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))} */}
        </>
    )
}
