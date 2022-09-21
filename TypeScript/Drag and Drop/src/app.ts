// Code goes here!

class ProjectInput {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element!: HTMLFormElement;
	titleInputElement!: HTMLInputElement;
	descriptionInputElement!: HTMLInputElement;
	peopleInputElement!: HTMLInputElement;

	constructor() {
		this.templateElement = <HTMLTemplateElement>(
			document.getElementById("project-input")!
		);
		this.hostElement = <HTMLDivElement>document.getElementById("app")!;
		const importedNode = document.importNode(
			this.templateElement.content,
			true
		);
		this.element = importedNode.firstElementChild as HTMLFormElement;
		this.element.id = "user-input";

		this.titleInputElement = <HTMLInputElement>document.querySelector("#title");
		this.descriptionInputElement = <HTMLInputElement>(
			document.querySelector("#description")
		);
		this.peopleInputElement = <HTMLInputElement>(
			document.querySelector("#people")
		);

		this.attach();
	}

	private attach() {
		this.hostElement.insertAdjacentElement("afterbegin", this.element);
	}
}

console.log("asdasd");

const prjInput = new ProjectInput();
