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
	@autoBind
	private submitHandler(event: Event) {
		event.preventDefault();
		console.log(this.titleInputElement.value);
	}

	private configure() {
		this.element.addEventListener("submit", this.submitHandler);
	}

	private attach() {
		this.hostElement.insertAdjacentElement("afterbegin", this.element);
	}
}

const prjInput = new ProjectInput();
