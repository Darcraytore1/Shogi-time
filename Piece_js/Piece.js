export default class Piece {

    campDeLaPiece;
    x;
    y;

    constructor(campDeLaPiece,x,y){
        this.campDeLaPiece = campDeLaPiece;
        this.x = x;
        this.y = y;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    setX(x){
        this.x = x;
    }

    setY(y){
        this.y = y;
    }

    getCampDeLaPiece(){
        return this.campDeLaPiece;
    }
}