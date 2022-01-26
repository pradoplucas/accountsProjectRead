const Debtor = require('../models/debtor.model');
const Bill = require('../models/bill.model');

const allMonths = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']

module.exports = {
	get: (req, res) => {
        console.log('##### -- ############## -- #####');
        console.log('##### --   New Access   -- #####');

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
                    oneBillDate.dateFull = (oneBillDate.date.getDate() <= 9 ? '0' + oneBillDate.date.getDate() : oneBillDate.date.getDate()) + '/' + allMonths[oneBillDate.date.getMonth()] + '/' + oneBillDate.date.getFullYear(); 
                    oneBillDate.dateShort = (oneBillDate.date.getDate() <= 9 ? '0' + oneBillDate.date.getDate() : oneBillDate.date.getDate()) + '/' + (oneBillDate.date.getMonth() < 9 ? '0' + (oneBillDate.date.getMonth() + 1) : oneBillDate.date.getMonth() + 1) + '/' + oneBillDate.date.getFullYear().toString().substring(2); 

                    accumulatedValue += oneBillDate.value;
                    
                    oneBillDate.valueAux = oneBillDate.value >= 0 ? 'green': 'red'; 
                    oneBillDate.value = oneBillDate.value.toFixed(2); 

                    oneBillDate.accumulatedValueAux = accumulatedValue >= 0 ? 'green': 'red'; 
                    oneBillDate.accumulatedValue = accumulatedValue.toFixed(2); 

                    return oneBillDate
                })

                console.log('##### -- Success: ' + rightDebtor.nameShow + ' -- #####');
                console.log('##### -- ############## -- #####');

                allBillsDebtor.reverse()

                res.render('index', {title: rightDebtor.nameShow, rightDebtor, allBillsDebtor})
                
            }).catch((err) => {
                console.log('##### -- Error: ID -- #####');
                console.log('##### -- ######### -- #####');
                console.log(err);
            })

        }).catch((err) => {
            console.log('##### -- Error: NA -- #####');
            console.log('##### -- ######### -- #####');
            console.log(err);
        })

    }
}  