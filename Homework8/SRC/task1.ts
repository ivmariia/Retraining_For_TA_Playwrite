type Employee = {
    name: string;
    profession: string;
    workingHoursPerDay: number;
  };
  
  type PremiumData = {
    isPremium: boolean;
    premium: number;
  };
  
  const employee: Employee = {
    name: "Alex Brown",
    profession: "doctor",
    workingHoursPerDay: 10,
  };
  
  const premiumData: PremiumData = {
    isPremium: true,
    premium: 1000,
  };
  
  const payPerHour: number = 32;
  const workingDays: number = 14;
  
  const experienceCoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5];
  
  function getSalaryInfo(
    employeeData: Employee,
    premiumData: PremiumData,
    payPerHour: number,
    workingDays: number,
    experienceCoefficient: number
  ): string {
    let salary: number;
  
    const baseSalary =
      employeeData.workingHoursPerDay * payPerHour * workingDays * experienceCoefficient;
  
    salary = premiumData.isPremium
      ? baseSalary + premiumData.premium
      : baseSalary;
  
    return `${employeeData.profession} ${employeeData.name} has a salary of ${salary}$ this month`;
  }
  
  const salaryInfo: string = getSalaryInfo(
    employee,
    premiumData,
    payPerHour,
    workingDays,
    experienceCoefficients[2]
  );
  
  console.log(salaryInfo);
  