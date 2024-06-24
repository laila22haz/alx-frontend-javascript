interface MajorCredits {
    credits: number;
    brand: string;
}

interface MinorCredits {
    credits: number;
    brand: string;
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => {
    subject1.credits += subject2.credits;

    return subject1;
}

const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => {
    subject1.credits += subject2.credits;

    return subject1;
}


const major1: MajorCredits = { credits: 30, brand: "major" };
const major2: MajorCredits = { credits: 20, brand: "major" };
const totalMajorCredits = sumMajorCredits(major1, major2);
console.log(totalMajorCredits); // Output: { credits: 50, __brand: "major" }

const minor1: MinorCredits = { credits: 15, brand: "minor" };
const minor2: MinorCredits = { credits: 10, brand: "minor" };
const totalMinorCredits = sumMinorCredits(minor1, minor2);
console.log(totalMinorCredits); // Output: { credits: 25, __brand: "minor" }