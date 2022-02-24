import {getPercents} from "./get_percent.js";

describe ("getPercents test", () => 
    it ("Positive testing: 30 Percents of 200 equal 60", () => {
        const result = getPercents(30, 200);
        expect(result).toBe(60);
    }),
    it ("Positive testing: 0 Percents of 200 equal 0", () => {
        const result = getPercents(0, 200);
        expect(result).toBe(0);
    }),
    it ("Positive testing: string 'str' Percents of 200 equal ", () => {
        const result = getPercents('str', 200);
        expect(result).toBe(NaN);
    }),
    it ("Positive testing: -5 Percents of 200 equal -10", () => {
        const result = getPercents(-5, 200);
        expect(result).toBe(-10);
    }),
    it ("Positive testing: 5 Percents of 0 equal 0", () => {
        const result = getPercents(5, 0);
        expect(result).toBe(0);
    }),
    it ("Positive testing: 150 Percents of 100 equal 15", () => {
        const result = getPercents(150, 100);
        expect(result).toBe(150);
    })
);