import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';

import './Team.css';

const Team = props => {
    const user = useRecoilValue(userState);
    const manager = user.manager;
    const agent = user.agent;

    const generateTeammates = teamMember => {
        return teamMember.teammates.map(teammate => {
            return (
                <>{teammate.firstName} { teammate.lastName}</>
            )
        })
    }

    return (
        <div>
            <h1>My Team</h1>
            <div className="ui inverted raised segment">
                <div className="teammate-card">
                    <div>
                        <img className="avatar" src="https://i.pravatar.cc/150?img=68" alt="avatar" />
                    </div>
                    <div>
                        <h3>{manager.__t}</h3>
                        <div>
                            <strong>Name:</strong> {manager.firstName} {manager.lastName} <br />
                            <strong>Email:</strong> {manager.email} <br />
                            <strong>Company:</strong> {manager.company.name} <br />
                            <strong>Teammates:</strong> {generateTeammates(manager)}
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="ui inverted raised segment">
                <div className="teammate-card">
                    <div>
                        <img className="avatar" src="https://i.pravatar.cc/150?img=60" alt="avatar" />
                    </div>
                    <div>
                        <h3>{agent.__t}</h3>
                        <div>
                            <strong>Name:</strong> {agent.firstName} {agent.lastName} <br />
                            <strong>Email:</strong> {agent.email} <br />
                            <strong>Company:</strong> {agent.agency.name} <br />
                            <strong>Teammates:</strong> {generateTeammates(agent)}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Team;