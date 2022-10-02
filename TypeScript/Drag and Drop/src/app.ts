// autobind decorator

function autoBind(
	_target: any,
	_methodName: string,
	descriptor: PropertyDescriptor
) {
	const originalMethod = descriptor.value;
	const adjDescriptor = {
		configurable: true,
		get() {
			return originalMethod.bind(this);
		},
	};
	return adjDescriptor;
}

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

		this.titleInputElement = <HTMLInputElement>(
			this.element.querySelector("#title")
		);

		this.descriptionInputElement = <HTMLInputElement>(
			this.element.querySelector("#description")
		);
		this.peopleInputElement = <HTMLInputElement>(
			this.element.querySelector("#people")
		);
		this.configure();
		this.attach();
	}

	private getUserInput(): [string, string, number] | void {
		const enteredTitle = this.titleInputElement.value;
		const enteredDescription = this.descriptionInputElement.value;
		const enteredPeople = this.peopleInputElement.value;
		if (
			!enteredTitle.trim() ||
			!enteredDescription.trim() ||
			!enteredPeople.trim()
		) {
			alert("Please enter the valid values");
		} else {
			return [enteredTitle, enteredDescription, +enteredPeople];
		}
	}

	private clearInputValues() {
		this.titleInputElement.value = "";
		this.descriptionInputElement.value = "";
		this.peopleInputElement.value = "";
	}

	@autoBind
	private submitHandler(event: Event) {
		event.preventDefault();
		const userInput = this.getUserInput();
		if (Array.isArray(userInput)) {
			const [titile, desc, people] = userInput;
			console.log(titile, desc, people);
			this.clearInputValues();
		}
	}

	private configure() {
		this.element.addEventListener("submit", this.submitHandler);
	}

	private attach() {
		this.hostElement.insertAdjacentElement("afterbegin", this.element);
	}
}

const prjInput = new ProjectInput();
