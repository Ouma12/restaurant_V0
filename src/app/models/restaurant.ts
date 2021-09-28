
export class Restaurant{
    images :string;
    name :string ;
    paragraph :string;
    content :string;
    location : string;
  
   constructor(images:string,name:string,paragraph:string,content:string,location:string){
        this.images=images;
        this.name=name;
        this.paragraph=paragraph;
        this.content=content;
        this.location=location;
    }

}