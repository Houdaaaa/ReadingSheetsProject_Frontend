import { Category } from './category';

/**
* Class of reading sheet
*/
export class ReadingSheet {
    public id: number;
    public Title: string; 
    public Author: string;
    public PagesNumber: number;
    public Editor: string;
    public EditionDate: string;
    public Collection: string;
    public OriginalLanguage: string;
    public MainCharacters: string;
    public Summary: string;
    public EnjoyedExtract: string;
    public CriticalAnalysis: string;
    public category: Category;

    constructor(id: number, Title: string, Author: string, PagesNumber: number, Editor: string, EditionDate: string, Collection: string, OriginalLanguage: string, MainCharacters: string, Summary: string, EnjoyedExtract: string, CriticalAnalysis: string, category: Category) { 
        this.id = id;
        this.Title = Title;
        this.Author = Author;
        this.PagesNumber = PagesNumber;
        this.Editor = Editor;
        this.EditionDate = EditionDate;
        this.Collection = Collection;
        this.OriginalLanguage = OriginalLanguage;
        this.MainCharacters = MainCharacters;
        this.Summary = Summary;
        this.EnjoyedExtract = EnjoyedExtract;
        this.CriticalAnalysis = CriticalAnalysis;
        this.category = category;
    }

}