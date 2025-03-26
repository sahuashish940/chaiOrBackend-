import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
  {
    videoFile : {
      typeof : String,
      required : true
    },thumbnail:{
      typeof : String,
      required : true
    },title : {
      typeof : String,
      required : true
    },
    description : {
      typeof : String,
      required : true
    },duration : {
      typeof : String,
      required : true
    },
    viwes : {
      typeof : Number,
      required : true
    },isPublished : 
    {
      typeof : Boolean,
      required : true
    },
    owner : {
      typeof : mongoose.Schema.Types.ObjectId,
      ref : 'User'
    }
  }, {
  timestamps: true
})

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model('Video', videoSchema);