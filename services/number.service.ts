import axios from "axios";

const baseURL = 'http://numbersapi.com';

const numbersApi = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default class NumberService {
    isPrime = (n: number) => {
        if (n <= 1) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }

    isPerfect = (n: number) => {
        if (n <= 1) return false;
        let sum = 1;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                sum += i;
                const other = n / i;
                if (other !== i) sum += other;
            }
        }
        return sum === n;
    }

    digitSum = (n: number) =>
        String(Math.abs(n))
            .split('')
            .reduce((sum, d) => sum + Number(d), 0)

    isArmstrong = (n: number) => {
        if (n < 0) return false;
        const digits = String(n).split('');
        const power = digits.length;
        return digits.reduce((sum, d) => sum + Math.pow(Number(d), power), 0) === n;
    }

    getProperties = (n: number) => {
        const properties = [];
        const parity = n % 2 === 0 ? "even" : "odd"
        if (this.isArmstrong(n)) properties.push("armstrong");
        properties.push(parity);
        return properties;
    }

    getFunFact = async (n: number) => {
        try {
            const response = await numbersApi.get(`/${n}/math`);
            return response.data.text;
        } catch (e) {
            throw Error("error fetching fun fact");
        }
    }

    analyzeNumber = async (number: number) => {
        return {
            number,
            is_prime: this.isPrime(number),
            is_perfect: this.isPerfect(number),
            properties: this.getProperties(number),
            digit_sum: this.digitSum(number),
            fun_fact: await this.getFunFact(number)
        };
    }
};