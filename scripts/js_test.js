const fn1 = () => {
    console.log(this.name);
};

const fn2 = function() {
    console.log(this.name);
};

this.name = "111";

fn1();
fn2();