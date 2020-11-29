import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';

import './Team.css';

const Team = props => {
    const user = useRecoilValue(userState);
    const [addMgmtClicked, setAddMgmtClicked] = useState(false);
    const [addAgentClicked, setAddAgentClicked] = useState(false);
    const manager = user.manager;
    const agent = user.agent;

    const generateTeammates = teamMember => {
        return teamMember.teammates.map(teammate => {
            return (
                <>{teammate.firstName} { teammate.lastName}</>
            )
        })
    }

    const handleAddMgmtClicked = e => {
        if (addMgmtClicked) {
            setAddMgmtClicked(false)
            console.log(addMgmtClicked);
        } else {
            setAddMgmtClicked(true);
            console.log(addMgmtClicked)
        }
    }

    const handleAddAgentClicked = e => {
        if (addAgentClicked) {
            setAddAgentClicked(false)
            console.log(addAgentClicked);
        } else {
            setAddAgentClicked(true);
            console.log(addAgentClicked);
        }
    }


    return (
        <div>
            <h1>My Team</h1>

            {manager ? (
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
            ) : (
                    <div>
                        <button
                            className="ui massive pink button"
                            onClick={handleAddMgmtClicked}
                        >Add Your Manager</button>
                    </div>
                )}


            <br />
            {agent ? (
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
            ) : (
                    <div>
                        <button
                            className="ui massive pink button"
                            onClick={handleAddAgentClicked}
                        >Add Your Agent</button>
                    </div>
                )}

        </div>

    )
}

export default Team;