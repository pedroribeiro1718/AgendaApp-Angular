export interface AutenticarUsuarioResponse {
    id: string; //id do usuário
    name: string; //nome do usuário
    email: string; //email do usuário
    role: string; //perfil do usuário
    token: string; //token de acesso do usuário
    accessedAt: string; //data de acesso
    expiration: string; //data de expiração
}