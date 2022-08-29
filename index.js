(async function () {
  const [_, __, arg3, arg4, arg5, arg6] = process.argv;
  console.log(`npx node_modules/${arg3} 
  ${arg4}`);
  console.log(arg5);
  console.log(arg6);
})();
