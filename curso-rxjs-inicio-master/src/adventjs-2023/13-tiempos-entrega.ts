console.log(calculateTime(["01:01:01", "09:59:59", "01:01:01"]));

function calculateTime(deliveries: string[]): string {
  let totalSeconds = 0;
  deliveries.forEach((delivery) => {
    const deliveryTime = delivery.split(":");
    const hours = parseInt(deliveryTime[0]);
    const minutes = parseInt(deliveryTime[1]);
    const seconds = parseInt(deliveryTime[2]);
    totalSeconds += seconds + minutes * 60 + hours * 3600;
  });
  debugger;
  let remainingSeconds = 25200 - totalSeconds;
  let negativo = true;
  if (remainingSeconds <= 0) negativo = false;
  remainingSeconds = Math.abs(remainingSeconds);
  let finalSeconds: any = remainingSeconds % 60;
  remainingSeconds -= finalSeconds;
  let remainingMinutes = remainingSeconds / 60;
  let finalMinutes: any = remainingMinutes % 60;
  remainingMinutes -= finalMinutes;
  let finalHours: any = remainingMinutes / 60;
  if (finalHours < 10 && finalHours > -1) {
    finalHours = "0" + finalHours;
  }
  if (finalMinutes < 10 && finalMinutes > -1) {
    finalMinutes = "0" + finalMinutes;
  }
  if (finalSeconds < 10 && finalSeconds > -1) {
    finalSeconds = "0" + finalSeconds;
  }
  let finalResult = `${finalHours}:${finalMinutes}:${finalSeconds}`;
  finalResult = finalResult.replace("-", "");
  if (negativo) return `-${finalResult}`;
  return finalResult;
}
