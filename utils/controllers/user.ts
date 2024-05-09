import { getSession } from "../auth";
import { userEntity } from "../entity";
import { revalidatePath } from "next/cache";


//#44, #57, #65 Edit personal account info
class EdiAccountInfoController {
    async saveInfoChange({ email, firstName, lastName, phoneNumber, ceaNumber, agency, license, country }: {
        email: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        country: string;
        ceaNumber?: string | undefined;
        agency?: string | undefined;
        license?: string | undefined;

    }) {
        try {

            const usr = await userEntity.setInfo({ email, firstName, lastName, phoneNumber, country, ceaNumber, agency, license })

            return { success: true, message: "User info updated", user: usr};

        } catch (e) {
            return { success: false, message: "Error updating user info", user: null};
        }

    }
}
//showdis
class CreateUserAccController {
    async createUserAccount({ email, passwordHash, firstName, lastName, phoneNumber, country, license, agency, ceaNumber, role }: {
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        country: string;
        license?: string | undefined;
        agency?: string | undefined;
        ceaNumber?: string | undefined;
        role: string;
    }) {
        try {
            // call to entity
            const usr = await userEntity.createUserAccount({ email, passwordHash, firstName, lastName, phoneNumber, country, license, agency, ceaNumber, role })

            return { success: true, message: "User created", user: usr};

        } catch (e) {
            return { success: false, message: `Error: ${e}`, user:null };
        }
    }
}
//showdis
class ViewUserAccountController {
    async getUserInfo() {
        return await userEntity.getAllUsers()
    }
}
// #74 search by first name
class UserAccountSearchController {
    async SearchUserAcount(fname:string) {
        return await userEntity.matchUserAccount({fname})
    }
}

// TODO: Implement login functionality
class LoginAccountController {
    async getUser(email: string, password: string) {

    }
}
//#36
class ShortlistController {
    async shortlist(email:string, propertyId:string) {
        return await userEntity.addPropertyToShortList({ email, propertyId })
    }
}

class SuspendUserAccountController{
    async suspendUserAccount(email:string){
        return await userEntity.suspendUserAccount({email})
    }
}




//showdis
const ediAccountInfoController = new EdiAccountInfoController()
const createUserAccController = new CreateUserAccController()
const viewUserAccountController = new ViewUserAccountController()
const userAccountSearchController = new UserAccountSearchController()
const loginAccountController = new LoginAccountController()
const shortlistController = new ShortlistController()
const suspendUserAccountController=new SuspendUserAccountController()


export {
    ediAccountInfoController,
    createUserAccController,
    viewUserAccountController,
    userAccountSearchController,
    loginAccountController,
    shortlistController,
    suspendUserAccountController,
}
