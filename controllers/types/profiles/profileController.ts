import { Request, Response } from "express";
import apiHandler from "../../../utils/ApiHandler";
import { profileService } from "../../../services/types/profiles/profileService";

class ProfileController {

    getProfiles(req: Request, res: Response) {

        const profile = new profileService();

        apiHandler(profile.getProfiles(req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    showProfile(req: Request, res: Response) {

        const profile = new profileService();

        apiHandler(profile.showProfile(req.headers.authorization as string, req.params.profile_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    storeProfile(req: Request, res: Response) {

        const profile = new profileService();

        apiHandler(profile.storeProfile(req.body, req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    updateProfile(req: Request, res: Response) {

        const profile = new profileService();

        apiHandler(profile.updateProfile(req.body, req.headers.authorization as string, req.params.profile_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    destroyProfile(req: Request, res: Response) {

        const profile = new profileService();

        apiHandler(profile.destroyProfile(req.headers.authorization as string, req.params.profile_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
}

export default new ProfileController();