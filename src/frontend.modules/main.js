import auth from '@/frontend.modules/auth';
import get from '@/frontend.modules/get';
export default class{
	constructor(){
		this.auth = auth;
		this.get = get;
	}
	bootstrap(){
		this.getParams = () => {
			this.classes = this.get("/classes");
			if(this.auth.isAuth){
				this.homework = this.get("/hw");
			}
		}
	}
}