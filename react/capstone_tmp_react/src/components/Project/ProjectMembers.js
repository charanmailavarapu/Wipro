// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addProjectMember, removeProjectMember } from '../../redux/slices/projectMemberSlice';
// import './ProjectMembers.css';

// const ProjectMembers = ({ project, members }) => {
//   const dispatch = useDispatch();
//   const [newMemberEmail, setNewMemberEmail] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleAddMember = async (e) => {
//     e.preventDefault();
//     if (!newMemberEmail.trim()) return;

//     try {
//       setLoading(true);
//       await dispatch(addProjectMember({
//         projectId: project.id,
//         memberData: {
//           email: newMemberEmail,
//           role: 'Member'
//         }
//       })).unwrap();
//       setNewMemberEmail('');
//     } catch (error) {
//       console.error('Error adding member:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRemoveMember = async (userId) => {
//     try {
//       await dispatch(removeProjectMember({
//         projectId: project.id,
//         userId
//       })).unwrap();
//     } catch (error) {
//       console.error('Error removing member:', error);
//     }
//   };

//   return (
//     <div className="project-members">
//       <h3>Project Members</h3>
      
//       <form onSubmit={handleAddMember} className="add-member-form">
//         <input
//           type="email"
//           placeholder="Enter member email"
//           value={newMemberEmail}
//           onChange={(e) => setNewMemberEmail(e.target.value)}
//           required
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Adding...' : 'Add Member'}
//         </button>
//       </form>

//       <div className="members-list">
//         {members && members.length === 0 ? (
//           <p>No members in this project yet.</p>
//         ) : (
//           members?.map(member => (
//             <div key={member.id} className="member-item">
//               <div className="member-info">
//                 <span className="member-email">{member.email}</span>
//                 <span className="member-role">{member.role}</span>
//               </div>
//               <button 
//                 onClick={() => handleRemoveMember(member.userId || member.id)}
//                 className="remove-btn"
//                 disabled={loading}
//               >
//                 Remove
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectMembers;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProjectMember, removeProjectMember } from '../../redux/slices/projectMemberSlice';
import './ProjectMembers.css';

const ProjectMembers = ({ project, members }) => {
  const dispatch = useDispatch();
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddMember = async (e) => {
    e.preventDefault();
    if (!newMemberEmail.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const result = await dispatch(addProjectMember({
        projectId: project.id,
        memberData: {
          email: newMemberEmail,
          role: 'Member'
        }
      })).unwrap();
      
      setNewMemberEmail('');
    } catch (error) {
      setError(error.message || 'Failed to add member');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveMember = async (userId) => {
    try {
      setError(null);
      await dispatch(removeProjectMember({
        projectId: project.id,
        userId
      })).unwrap();
    } catch (error) {
      setError(error.message || 'Failed to remove member');
    }
  };

  return (
    <div className="project-members">
      <h3>Project Members</h3>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleAddMember} className="add-member-form">
        <input
          type="email"
          placeholder="Enter member email"
          value={newMemberEmail}
          onChange={(e) => setNewMemberEmail(e.target.value)}
          required
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Member'}
        </button>
      </form>

      <div className="members-list">
        {members && members.length === 0 ? (
          <p className="no-members">No members in this project yet.</p>
        ) : (
          members?.map(member => (
            <div key={member.id || member.userId} className="member-item">
              <div className="member-info">
                <span className="member-email">{member.email}</span>
                <span className="member-role">{member.role}</span>
              </div>
              <button 
                onClick={() => handleRemoveMember(member.userId || member.id)}
                className="remove-btn"
                disabled={loading}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectMembers;