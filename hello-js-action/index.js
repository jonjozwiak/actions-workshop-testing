import core from "@actions/core";
import github from "@actions/github";

async function run() {
  try {
    const name = core.getInput("name");
    core.info(`Hello ${name}!`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
