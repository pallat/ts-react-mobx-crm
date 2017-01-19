import { observable } from 'mobx';

export class LoginStore {
    @observable username = "";
    @observable password = "";
}