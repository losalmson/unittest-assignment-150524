import { IAddResponse } from "../ts/models/IAddResponse"
import * as fuctions from "./../ts/functions"

describe("Testing"), ()=> {
    let mockedAddTodo: jest.SpyInstance<IAddResponse>;

    beforeEach() => jest.spyOn(functions, addTodo);
}