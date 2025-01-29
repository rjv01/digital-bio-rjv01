#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";
import gradient from "gradient-string";
import ora from "ora";
import inquirer from "inquirer";

const spinner = ora("Loading your awesome profile...").start();

// Add a delay for dramatic effect
setTimeout(() => {
  spinner.succeed("Profile Loaded!");

  // Create a big, cool name using `figlet` and `gradient-string`
  console.log(
    gradient.rainbow.multiline(
      figlet.textSync("Raj Shekhar Verma", {
        font: "Big",
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );

  // Profile box
  const profile = boxen(
    `${chalk.blueBright.bold("Bio:")}
     Passionate developer skilled in C++ and JavaScript, with hands-on experience in both front-end and back-end development. Proficient in frameworks like Django, Node.js(runtime env), and React.js(lib.), and experienced in working with databases such as MongoDB. Built impactful projects like a job portal (Suvidha) for rural communities and an event management system  (EventPro)for student registrations and club memberships. Adept at using HTML, CSS, TailwindCSS, and Git to create user-friendly web applications. Strong problem-solving skills with 400+ DSA questions solved and a knack for learning from mistakes to improve solutions. Eager to contribute to meaningful projects that address real-world needs and enhance user experiences.

  ${chalk.greenBright.bold("Skills:")}
     MERN Stack | JavaScript | ReactJS | NodeJS | MongoDB | Tailwind | MySql | Git

  ${chalk.yellowBright.bold("Achievements:")}
     - Built full-stack web applications like an Event Management System and a Job-Providing Platform using React.js, Node.js, and       MongoDB.
     - Movie Review Application
     - Worked with real-world tech stacks, using free APIs and Git for project management.

  ${chalk.magentaBright.bold("Connect:")}
     ${chalk.cyan("GitHub:")} https://github.com/rjv01
     ${chalk.cyan("LinkedIn:")} https://www.linkedin.com/in/raj-shekhar-verma-2a292a231/
     ${chalk.cyan("Leetcode")} https://leetcode.com/u/rjv01/

  ${chalk.bold.cyan("Card:")} npx rjv01

  ${chalk.whiteBright.bold("Let's turn ideas into something phenomenal!")}
  `,
    {
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "cyan",
      align: "center",
    }
  );

  console.log(profile);

  // Interactive Menu
  const options = [
    // "🌟 View Resume",
    "✉️  Contact Raj Shekhar Verma via Email",
    "🔗 View GitHub Projects",
    "🚪 Exit",
  ];

  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: chalk.bold.yellowBright(
          "What digital adventure shall we embark on?"
        ),
        choices: options,
      },
    ])
    .then((answer) => {
      switch (answer.action) {
        // case "🌟 View Resume":
        //   console.log(
        //     chalk.greenBright("\nOpening resume... (Simulated file opening)\n")
        //   );
        //   break;
        case "✉️  Contact Raj Shekhar Verma via Email":
          console.log(
            chalk.blueBright(
              "\nLaunching email client... verma.rajshekhar1@gmail.com\n"
            )
          );
          break;
        case "🔗 View GitHub Projects":
          console.log(
            chalk.magentaBright(
              "\nCheck out the GitHub projects here: https://github.com/rjv01\n"
            )
          );
          break;
        case "🚪 Exit":
          console.log(chalk.redBright("\nSee You Soon! Have a great day!\n"));
          process.exit();
      }
    });
}, 2000);
