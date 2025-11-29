import React from 'react';
import { WorkflowStep, Actor } from '../types';
import { UserIcon, ClientIcon, AdminIcon, SystemIcon, SalesIcon } from './Icons';

interface WorkflowCardProps {
  step: WorkflowStep;
}

const cardConfig = {
  [Actor.USER]: {
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-900',
    iconColor: 'text-blue-600',
    iconBgColor: 'bg-blue-100',
    icon: <UserIcon />,
  },
  [Actor.CLIENT]: {
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-900',
    iconColor: 'text-purple-600',
    iconBgColor: 'bg-purple-100',
    icon: <ClientIcon />,
  },
  [Actor.SYSTEM]: {
    bgColor: 'bg-green-50',
    textColor: 'text-green-900',
    iconColor: 'text-green-600',
    iconBgColor: 'bg-green-100',
    icon: <SystemIcon />,
  },
  [Actor.ADMIN]: {
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-900',
    iconColor: 'text-yellow-600',
    iconBgColor: 'bg-yellow-100',
    icon: <AdminIcon />,
  },
  [Actor.SALES]: {
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-900',
    iconColor: 'text-teal-600',
    iconBgColor: 'bg-teal-100',
    icon: <SalesIcon />,
  },
};

const WorkflowCard: React.FC<WorkflowCardProps> = ({ step }) => {
  const config = cardConfig[step.actor] || cardConfig[Actor.SYSTEM];

  return (
    <div className={`w-full rounded-lg ${config.bgColor} p-5 shadow-md hover:shadow-lg transition-shadow duration-300`}>
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 rounded-full w-10 h-10 flex items-center justify-center ${config.iconBgColor} ${config.iconColor}`}>
          {React.cloneElement(config.icon, { className: 'w-6 h-6' })}
        </div>
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wider ${config.textColor}`}>{step.actor}</p>
          <h3 className="text-lg font-bold text-slate-900 mt-1">{step.title}</h3>
          <p className="text-sm text-slate-700 mt-2 whitespace-pre-line">{step.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkflowCard;