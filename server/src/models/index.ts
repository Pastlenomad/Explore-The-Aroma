'use strict'
import mongoose from 'mongoose';
import { Parfume } from "./schemas/parfumeSchema";
import { parfumeList } from "./data/parfumeList";
let dataCopied = false;

mongoose.connect(`mongodb+srv://main:erban@main.qnqycrw.mongodb.net/`)
    .then(() => {
    console.log('Connected to MongoDB');
    Promise.all(parfumeList.map((data) => Parfume.create(data)))
            .then(() => {
                if (dataCopied) {
                    console.log('Data saved successfully');
                dataCopied = false;
            }
            })
        .catch(error => {
        console.error('Error saving data:', error);
    });
})
    .catch(error => {
    console.error('Error connecting to MongoDB:', error);
});
export default mongoose;
