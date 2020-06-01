import {Job_vo} from './Job_vo';


export class ThumbHolder extends HTMLElement
{
    public  job_vo:Job_vo;
    private _thumbPath:string;
    private _thumbWidth:number;

    constructor (){
        super();
        //const vo:Job_vo = this.getAttribute('data-vo');
        //this._job_vo = undefined;
        
        this._thumbWidth = undefined
        this._thumbPath = this.job_vo.thumbPath;
        let myThumb = new Image();
        myThumb.width = this._thumbWidth;
        myThumb.src = this.job_vo.thumbPath;
        myThumb.className = 'myImage';
        this.appendChild(myThumb);
    }

    createdCallback() {
        console.log("TH created");
    };
    /*
    public initThumb(job_vo:Job_vo, width:number):void
    {
        
        this._job_vo = job_vo;
        this._thumbWidth = width;
        this._thumbPath = this._job_vo.thumbPath;
        let myThumb = new Image();
        myThumb.width = this._thumbWidth;
        myThumb.src = this._job_vo.thumbPath;
        myThumb.className = 'myImage';
        this.appendChild(myThumb);
        
    }

    click():any{
        
        alert("Hello! clicked");
    }
    
    private test()
    {

    }
    */
   


}