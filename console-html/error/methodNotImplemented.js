

export class MethodNotImplemented extends Error {
    constructor(message='method not implemented' ) {
        super(message)

        this.name = 'method not implemented'
    }
}