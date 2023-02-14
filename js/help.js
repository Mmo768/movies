class movies{
    constructor(img , title , text,popularity,adult,vote_average,vote_count,release_date){
        this.img = img;
        this.title = title;
        this.text = text;
        this.popularity = popularity;
        this.adult = adult;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
        this.release_date = release_date;
    }

    imgFilm(){
        return this.img;
    };
    titleFilm(){
        return this.title;
    };
    textFilm(){
        return this.text;
    };
    popularityFilm(){
        return this.popularity;
    };
    adultFilm(){
        return this.adult;
    };
    averageFilm(){
        return this.vote_average;
    };
    ountFilm(){
        return this.vote_count;
    };
    dateFilm(){
        return this.release_date;
    };
}

