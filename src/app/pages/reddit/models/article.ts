export class Article {
  constructor(
    article?: Article,

    public id: string = null,
    public title: string = null,
    public link: string = null,
    public points?: number
  ) {
    Object.assign(this, article); //Накатываем (копируем) объект
    
    if (this.points == null) {
      this.points = 0;
    }
  }

  getTitle() {
    return this.title;
  }
}
