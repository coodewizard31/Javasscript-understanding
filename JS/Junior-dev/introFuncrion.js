/* Function allow you to write reusable bit of code.
to use Dry(Do not repeat your self) by using a code block*/

/* A function only works when you call it */
/* Create a simple function when you call it  it alerts you on current time */

function timeAlert() {
    const date=new Date()
    alert(`time stamp:${date.toISOString()}`);
}
/* To call a function name is by way of using it followed by the brackets */
timeAlert();

