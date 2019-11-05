interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const react1: Rect = {
    id: '1234',
    color: '#ccc',
    size: {
        width: 40,
        height: 30
    }
}

const react2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
}

react2.color = 'black';

const react3 = {} as Rect;

const react4 = <Rect>{} //generic type

// ===========

interface ReactWithArea extends Rect {
    getArea: () => number
}

const react5: ReactWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 30
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}