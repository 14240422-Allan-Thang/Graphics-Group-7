/* Allan
    Classes are defined to easily store and access commonly used information for the game.
*/

class Tile {
    constructor(file, rank) {
        this.file = file;
        this.rank = rank;
        this.colour;
        this.piece;
        this.mesh;
        this.originalMaterial;
    }
    getColour() {
        return this.colour;
    }
    setColour(value) {
        this.colour = value;
    }
    getRank() {
        return this.rank;
    }
    getFile() {
        return this.file;
    }
    getPiece() {
        return this.piece;
    }
    setPiece(value) {
        this.piece = value;
    }
    getMesh() {
        return this.mesh;
    }
    setMesh(value) {
        this.mesh = value;
    }
    // Tiles have an original material so that they can go back from being highlighted.
    getOriginalMaterial() {
        return this.originalMaterial;
    }
    setOriginalMaterial(value) {
        this.originalMaterial = value;
    }
}

class Piece {
    constructor(type, tile, mesh, colour) {
        this.type = type;
        this.tile = tile;
        this.mesh = mesh;
        this.colour = colour;
    }
    getType() {
        return this.type;
    }
    getTile() {
        return this.tile;
    }
    setTile(value) {
        this.tile = value;
    }
    getColour() {
        return this.colour;
    }
    setColour(value) {
        this.colour = value;
    }
    getMesh() {
        return this.mesh;
    }
    setMesh(value) {
        this.mesh = value;
    }
    updatePosition() {
        this.mesh.position.set(FileToPos(this.tile.getFile()), 0, (RankToPos(this.tile.getRank()) * -1));
    }
}

class TakenPieces {
    constructor(colour) {
        this.colour = colour;
        this.pieces = [];
    }
    getPieces() {
        return this.pieces;
    }
    setPieces(value) {
        this.pieces = value;
    }
    addPiece(value) {
        this.pieces.push(value);
        if (this.colour === 'W') {
            for (let i = 0; i < this.pieces.length; i++) {
                switch (true) {
                    case i <= 3:
                        this.pieces[i].getMesh().position.set(8+i, 0, 0);
                        break;
                    case i <= 7:
                        this.pieces[i].getMesh().position.set(4+i, 0, -1);
                        break;
                    case i <= 11:
                        this.pieces[i].getMesh().position.set(0+i, 0, -2);
                        break;
                    default:
                        this.pieces[i].getMesh().position.set(-4+i, 0, -3);
                        break;
                }
            }
        }
        else {
            for (let i = 0; i < this.pieces.length; i++) {
                switch (true) {
                    case i <= 3:
                        this.pieces[i].getMesh().position.set(-1-i, 0, -7);
                        break;
                    case i <= 7:
                        this.pieces[i].getMesh().position.set(3-i, 0, -6);
                        break;
                    case i <= 11:
                        this.pieces[i].getMesh().position.set(7-i, 0, -5);
                        break;
                    default:
                        this.pieces[i].getMesh().position.set(11-i, 0, -4);
                        break;
                }
            }
        }
    }
}