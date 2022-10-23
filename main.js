///  Problem solving -1 :লুডু খেলায় আমরা কিভাবে 1 থেকে 6 পর্যন্ত রেনডমলি প্রিন্ট করতে পারি 

function getRandomNumber (min,max){
    return Math.floor(Math.random() * (max - min))
}

console.log(getRandomNumber(1,6))

/// output 1 - 6 anynumber 

/// Probem solving -2 : কোন কিছুর নাম কে আমরা ভাবে Alphabetically সাজাতে পারি

const NameArry = ['Yousuf','Sujon','Sumon','Jasim','korim'];
NameArry.sort();
console.log(NameArry);


/// Out put : ['Jasim', 'Sujon', 'Sumon', 'Yousuf', 'korim'];

// Problem solving -3 : Number কে আমরা ভাবে Alphabetically সাজাতে পারি

const number = [1,23,10,4,34,56];

number.sort(function(a,b){
    return a - b;
    
})
console.log(number)

/// Output : [1, 4, 10, 23, 34, 56];