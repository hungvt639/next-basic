import UserRepository from "./repository/UserRespository";
const repositories = {
    user: UserRepository,
};

export default function getFactory(name) {
    return repositories[name];
}
