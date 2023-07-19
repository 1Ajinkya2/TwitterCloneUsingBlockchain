const main = async() => {
  const contractFactory = await ethers.getContractFactory('TwitterContract');
  const contract = await contractFactory.deploy();
  await contract.deployed();

  console.log("Contract deployed to: ", contract.address);
}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
