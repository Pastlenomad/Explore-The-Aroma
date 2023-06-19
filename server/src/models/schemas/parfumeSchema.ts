'use strict';

import { Schema } from "mongoose";
import db from "../index.js"


interface Iparfume extends Document {
  name: string;
  perfumeName: string;
  description: string;
  url: string;
  noteUrl: string;
  heartNoteUrl: string;
  baseNoteUrl: string;
}

const ParfumeSchema: Schema = new db.Schema({
  name: {
    type: String, required: true
  },
  perfumeName:  {
    type: String, required: true
  },
  description:  {
    type: String, required: true
  },
  url:  {
    type: String, required: true
  },
  noteUrl:  {
    type: String, required: true
  },
  heartNoteUrl:  {
    type: String, required: true
  },
  baseNoteUrl:  {
    type: String, required: true
  }
})
const Parfume = db.model<Iparfume>('Parfume', ParfumeSchema);


export {Parfume, Iparfume};