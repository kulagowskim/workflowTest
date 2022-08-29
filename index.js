(async function () {
  const [_, __, arg3, arg4] = process.argv;
  console.log(`npx node_modules/${arg3} 
  ${arg4}`);
})();
