class book{
  constructor({cover,author,book,intro,id}){
    this.cover=cover;
    this.author=author;
    this.book=book;
    this.intro=intro;
    this.id=id;
  }
}
export function getBooks(data) {
  return new book({
    cover:data.cover,
    author:data.author_name,
    book:data.book_name,
    intro:data.intro,
    id:data.bid
  })
}
class book2 {
  constructor({cover,author,book_name,newChapName,size,end,up_time,id,class_name,}){
    this.cover=cover;
    this.author=author;
    this.book_name=book_name;
    this.newChapName=newChapName;
    this.id=id;
    this.end=end;
    this.size=size;
    this.up_time=up_time;
    this.class_name=class_name;
  }
}
export function getBooks2(data) {
  return new book2({
    cover:data.cover,
    author:data.author_name,
    book_name:data.book_name,
    newChapName:data.newChapName,
    id:data.bid,
    end:data.end,
    class_name:data.class_name,
    size:data.size,
    up_time:data.up_time
  })
}
