import { log, logTitle } from './HTMLLogger';

export default () => {
    logTitle('Default  Function Parameter');

    const calculateSalary = (yearly, bonus = 0) => {
    	return yearly+bonus;
    }

    log(calculateSalary(34000, 6500));
    log(calculateSalary(32000));
}
