export const HELLO_WORLD = "Hello World";

export function greet(): string {
  return HELLO_WORLD;
}

function main(): void {
  console.log(greet());
}

if (require.main === module) {
  main();
}

export default main;
