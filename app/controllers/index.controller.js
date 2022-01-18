const Debtor = require('../models/debtor.model');
const Bill = require('../models/bill.model');

const allMonths = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']

module.exports = {
	get: (req, res) => {

        Debtor.find().lean().then((allDebtors) => {
            let rightDebtor = {}

            for(oneDebtor of allDebtors){
                if(req.params.name == oneDebtor.nameId && (oneDebtor.n1*oneDebtor.n2 == parseInt(req.params.code))){
                    rightDebtor = oneDebtor
                    break;
                }
            }

            rightDebtor.total = rightDebtor.total.toFixed(2)
            rightDebtor.totalAux = rightDebtor.total >= 0 ? 'green': 'red'; 

            
            Bill.find({debtorId: rightDebtor._id}).lean().then((allBillsDebtor) => {
                let accumulatedValue = 0.0;

                allBillsDebtor = allBillsDebtor.sort((a, b) => a.date - b.date)

                allBillsDebtor = allBillsDebtor.map((oneBillDate) => {
                    oneBillDate.date = oneBillDate.date.getDate() + '/' + allMonths[oneBillDate.date.getMonth()] + '/' + oneBillDate.date.getFullYear(); 
                    accumulatedValue += oneBillDate.value;
                    
                    oneBillDate.valueAux = oneBillDate.value >= 0 ? 'green': 'red'; 
                    oneBillDate.value = oneBillDate.value.toFixed(2); 

                    oneBillDate.accumulatedValueAux = accumulatedValue >= 0 ? 'green': 'red'; 
                    oneBillDate.accumulatedValue = accumulatedValue.toFixed(2); 

                    return oneBillDate
                })

                allBillsDebtor.reverse()

                res.render('index', {title: rightDebtor.nameShow, rightDebtor, allBillsDebtor})
                
            }).catch((err) => {
                console.log(err);
            })

        }).catch((err) => {
            console.log(err);
        })

    }
}  