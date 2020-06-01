
import { JsonObject, JsonMember } from "./../../../node_modules/typedjson-npm/js/typed-json";
import 'reflect-metadata';
import { stringify } from "querystring";

export class Job_vo //implements IJob_vo
{
   
    
    //
    @JsonMember({type:String})
    thumbPath:string;
    @JsonMember({ type:Number})
    id:number;
    @JsonMember({type:String})
    description:string;
    @JsonMember({type:String})
    filePath:string;
    @JsonMember({type:String})
    jobTitle:string;
    @JsonMember({ type:Number})
    position:number;
}
