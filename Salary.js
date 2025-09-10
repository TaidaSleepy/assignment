//Function that calculates net salary

// KRA Tax Rates 
const KRA_TAX_RATES = [
    { min: 0, max: 24000, rate: 0.10 },
    { min: 24001, max: 32333, rate: 0.25 },
    { min: 32334, max: Infinity, rate: 0.30 }
];

// Adding personal Relief as a value
const PERSONAL_RELIEF = 2400;

// NHIF tax rates
const NHIF_RATES = [
    { min: 0, max: 5999, amount: 150 },
    { min: 6000, max: 7999, amount: 300 },
    { min: 8000, max: 11999, amount: 400 },
    { min: 12000, max: 14999, amount: 500 },
    { min: 15000, max: 19999, amount: 600 },
    { min: 20000, max: 24999, amount: 750 },
    { min: 25000, max: 29999, amount: 850 },
    { min: 30000, max: 34999, amount: 900 },
    { min: 35000, max: 39999, amount: 950 },
    { min: 40000, max: 44999, amount: 1000 },
    { min: 45000, max: 49999, amount: 1100 },
    { min: 50000, max: 59999, amount: 1200 },
    { min: 60000, max: 69999, amount: 1300 },
    { min: 70000, max: 79999, amount: 1400 },
    { min: 80000, max: 89999, amount: 1500 },
    { min: 90000, max: 99999, amount: 1600 },
    { min: 100000, max: Infinity, amount: 1700 }
];

// NSSF Rates 
const NSSF_RATE = 0.06; 
const NSSF_MAX = 1800;

// Function to calculate PAYE using KRA
function calculatePAYE(taxableIncome) {
    let tax = 0;
    let remainingIncome = taxableIncome;
    
    // Calculate tax using KRA
    for (const band of KRA_TAX_RATES) {
        if (remainingIncome <= 0) break;
        
        const taxableInBand = Math.min(remainingIncome, band.max - band.min + 1);
        tax += taxableInBand * band.rate;
        remainingIncome -= taxableInBand;
    }
    
    // Add
    tax = Math.max(0, tax - PERSONAL_RELIEF);
    
    return tax;
}

// Function calculates NHIF deduction using gross salary
function calculateNHIF(grossSalary) {
    for (const rate of NHIF_RATES) {
        if (grossSalary >= rate.min && grossSalary <= rate.max) {
            return rate.amount;
        }
    }
    return 0;
}

// Function calculates NSSF deduction
function calculateNSSF(basicSalary) {
    return Math.min(basicSalary * NSSF_RATE, NSSF_MAX);
}

// Main function calculates the net salary and gross salary
function calculateNetSalary(basicSalary, benefits) {
   const grossSalary = basicSalary + benefits;
    
    // Calculate the deductions to find net salary
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(basicSalary);
    
    // Calculates the net salary
    const totalDeductions = paye + nhif + nssf;
    const netSalary = grossSalary - totalDeductions;
    
    return {
        grossSalary: grossSalary.toFixed(2),
        paye: paye.toFixed(2),
        nhif: nhif.toFixed(2),
        nssf: nssf.toFixed(2),
        totalDeductions: totalDeductions.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}

// The input and output
const basicSalary = 59000;
const benefits = 4500;
const result = calculateNetSalary(basicSalary, benefits);

console.log("     NET SALARY CALCULATOR");
console.log("Basic Salary: KSH", basicSalary.toFixed(2));
console.log("Benefits: KSH", benefits.toFixed(2));
console.log("Gross Salary: KSH", result.grossSalary);
console.log("DEDUCTIONS:");
console.log("PAYE: KSH", result.paye);
console.log("NHIF Deductions: KSH", result.nhif);
console.log("NSSF Deductions: KSH", result.nssf);
console.log("Total Deductions: KSH", result.totalDeductions);
console.log("NET SALARY: KSH", result.netSalary);