const usd_euro = 0.91 ;
const usd_ksh = 152.22;

const euro_usd = 1.11 ;
const eoro_ksh = 166.71;

const kshs_usd = 0.0066 ;
const kshs_euro = 0.0061;

let currencyamount;
let conversion;

document.getElementById("usdamount_euro").innerHTML = "1 USD" + "=" + usd_euro + " EURO" ;
document.getElementById("usdamount_kshs").innerHTML = "1 USD" + "=" + usd_ksh + " KSH" ;

document.getElementById("euroamount_usd").innerHTML = "1 EURO" + "=" + euro_usd + " USD" ;
document.getElementById("euroamount_kshs").innerHTML = "1 EURO" + "=" + eoro_ksh + " KSH" ;

document.getElementById("kshsamount_usd").innerHTML = "1 KSH" + "= " + kshs_usd + " USD" ;
document.getElementById("kshsamount_euro").innerHTML = "1 KSH" + "= " + kshs_euro + " EURO" ;


document.getElementById("submit").onclick = function(){
    if (document.getElementById("usd_from").checked){
        currencyamount = document.getElementById("toconvert_amount").value;
        currencyamount = Number(currencyamount);
        if (document.getElementById("euro_to").checked){
            conversion = currencyamount * usd_euro;
            document.getElementById("converted_amount").innerHTML = conversion;
        }
        else if (document.getElementById("kshs_to").checked){
            conversion = currencyamount * usd_ksh;
            document.getElementById("converted_amount").innerHTML = conversion;
        }
    }
    else if (document.getElementById("euro_from").checked){
            currencyamount = document.getElementById("toconvert_amount").value;
            currencyamount = Number(currencyamount);
            if (document.getElementById("usd_to").checked){
                conversion = currencyamount * euro_usd;
                document.getElementById("converted_amount").innerHTML = conversion;
            }
            else if (document.getElementById("kshs_to").checked){
                conversion = currencyamount * eoro_ksh;
                document.getElementById("converted_amount").innerHTML = conversion;
            }
        }
        else if (document.getElementById("kshs_from").checked){
                currencyamount = document.getElementById("toconvert_amount").value;
                currencyamount = Number(currencyamount);
                if (document.getElementById("usd_to").checked){
                    conversion = currencyamount * kshs_usd;
                    document.getElementById("converted_amount").innerHTML = conversion;
                }
                else if (document.getElementById("euro_to").checked){
                    conversion = currencyamount * kshs_euro;
                    document.getElementById("converted_amount").innerHTML = conversion;
                }
            }
}