describe('calculateMonthlyPayment Test', function() {
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 20000,
      years: 10,
      rate: 2.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('188.54')
  });
})

describe('calculateMonthlyPayment Test', function() {
  it('should return a result with 2 decimal places', function () {
    const values = {
      amount: 25000,
      years: 15,
      rate: 5.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('204.27')
  });
})

