const express = require('express');
const userRoutes = require('./server/user/user.route');
const authRoutes = require('./server/auth/auth.route');
const workspaceRoutes = require('./server/workspace/workspace.route');
const organizationRoutes = require('./server/organization/organization.route');
const projectRoutes = require('./server/project/project.route');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount user routes at /users
router.use('/users', userRoutes);

// mount user routes at /users
router.use('/workspace', workspaceRoutes);

// mount user routes at /users
router.use('/organization', organizationRoutes);

// mount user routes at /users
router.use('/project', projectRoutes);

module.exports = router;
