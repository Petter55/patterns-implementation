import {Project} from './Project'

export class Product {
    private title: string
    private project: Project

    constructor(title:string, project:Project){
        this.title = title
        this.project = project
    }

    getProject():Project {
        return this.project;
    }

    public presentPaperWork():Array<any> {
        return this.project.fetchDocumentation(this.project.id);
    }
}